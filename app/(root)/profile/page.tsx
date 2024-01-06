import Collection from "@/components/shared/Collection"
import { Button } from "@/components/ui/button"
import { getEventsByUser } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs";
import Link from "next/link"

const ProfilePage = async () => {

    const {sessionClaims} = auth();
    const userId = sessionClaims?.userId as string;

    const organizedEvents = await getEventsByUser({userId, page: 1}); 

  return (
    <>
        {/*EVENTS ORGANIZED*/}
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
            <div className="wrapper flex items-center justify-center sm:justify-between">
                <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
                <Button asChild size="lg" className="button hidden sm:flex">
                     <Link href="/events/create">
                        Create New Event
                     </Link>
                </Button>
            </div>
        </section>

        <section className="wrapper my-8">
            <Collection 
            data={organizedEvents?.data}
            emptyTitle="No Events Have Been Created"
            emptyStateSubtext="Create your first event now !"
            collectionType="Events_Organized"
            limit={6}
            page={1}
            urlParamName="eventsPage"
            totalPages={2}
            />
        </section>
    </>
)
}

export default ProfilePage