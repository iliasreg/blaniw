import Collection from '@/components/shared/Collection'
import { getAllEvents } from '@/lib/actions/event.actions'

const EventsDisplay = async () => {

    const events = await getAllEvents({
        query: '',
        category: '',
        page: 1,
        limit: 6
    });

    return (
        <section
            id='events'
            className='wrapper my-8 flex-col gap-4 md:gap-12 w-full h-screen flex justify-center items-start'
        >
            <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-2xl md:text-5xl'>Explore our Creative Environment !</h1>
                <h2 className='font-bold text-lg md:text-4xl text-stone-700'>Trust by Thousands of Events</h2>
            </div>
            <div className='w-full flex justify-start md:justify-center items-center'><input type="text" id="" placeholder='Search for an event' className='h-8 w-[60%] md:h-10 md:w-[70%] rounded-xl outline-none px-4 py-[.2rem] border-2 border-stone-300 text-stone-800' /></div>
            <Collection
                data={events?.data}
                emptyTitle="No Events found"
                emptyStateSubtext="Sign in and create your own event !"
                collectionType="All_Events"
                limit={6}
                page={1}
                totalPages={2}
            />
        </section>
    )
}

export default EventsDisplay