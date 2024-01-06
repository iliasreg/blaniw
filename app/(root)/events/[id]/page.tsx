import Collection from "@/components/shared/Collection";
import { getEventById, getRelatedEventsByCategory } from "@/lib/actions/event.actions"
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types"

import Image from 'next/image'

const EventDetails = async ({params: {id}, searchParams}: SearchParamProps) => {
    const event = await getEventById(id);

    const relatedEvents = await getRelatedEventsByCategory({
        categoryId: event.category._id,
        eventId: event._id,
        page: searchParams.page as string,
    })

    return (
        <>
        <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
                <Image 
                    src={event.imageUrl}
                    alt="event image"
                    width={1000}
                    height={1000}
                    className="h-full min-h-[300px] object-cover object-center"
                />
                <div className="flex w-full flex-col gap-8 p-5 md:p-10">
                    <div className="flex flex-col gap-6">
                        <h2 className="h2-bold">{event.title}</h2>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="flex gap-3">
                                {event.isFree 
                                ? (<p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">FREE</p>) 
                                : (<p className="p-bold-20 rounded-full bg-red-500/10 px-5 py-2 text-red-700">${event.price}</p>)
                                }
                                <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-600">{event.category.name}</p>
                            </div>
                            <p className="p-medium-18 ml-2 mt-2 sm:mt-0">By{' '}<span className="main-text">{event.organizer.firstName} {event.organizer.lastName}</span></p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex gap-2 md:gap-3">
                            <Image src="/assets/icons/calendar.png" alt="calendar" width={32} height={32} className="object-contain"/>
                            <div className="p-medium-14 md:p-regular-16 flex flex-wrap items-center">
                                <p className="pl-1">
                                    {formatDateTime(event.startDateTime).dateOnly} - {' '}
                                    {formatDateTime(event.startDateTime).timeOnly} /
                                </p>
                                <p className="pl-1">
                                    {formatDateTime(event.endDateTime).dateOnly} - {' '}
                                    {formatDateTime(event.endDateTime).timeOnly}
                                </p>
                            </div>
                        </div>

                        <div className="p-regular-20 flex items-center gap-3">
                            <Image src="/assets/icons/location.png" alt="location.png" width={32} height={32} className="object-contain" />
                            <p className="pl-1 p-medium-14 lg:p-regular-16">{event.location}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="p-bold-20 text-grey-600">Description:</p>
                        <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
                        <p className="p-medium-16 lg:p-regular-18 truncate main-text">{event.url}</p>
                    </div>

                </div>
            </div>
        </section>
        
        {/*EVENTS WITH THE SAME CATEGORY*/}
        <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
            <h2 className="h2-bold">Related Events</h2>
            <Collection 
            data={relatedEvents?.data}
            emptyTitle="No Events found"
            emptyStateSubtext="Come Back Later"
            collectionType="All_Events"
            limit={6}
            page={1}
            totalPages={2}
            />
        </section>                        

        </>
    )
}

export default EventDetails