import { BsTwitter } from "react-icons/bs";

import useNotifications from "@/hooks/useNotifications";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useEffect } from "react";

const NotificationsFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotifications.length === 0) {
    return (
      <div className="text-neutral-600 text-center p-6 text-xl">
        No notifications
      </div>
    )
  }
  
  return ( 
    <div className="flex flex-col">
      {fetchedNotifications.map((notification: Record<string, any>) => (
        <div key={notification.id} className="flex items-center  border-b-[1px] 
        bg-white
           m-2
        p-3
        cursor-pointer 
          rounded-[12px]
        transition">
         <img src="/images/channels4_profile.jpg" className="m-1 w-[36px] h-[36px]" />

          <p className="text-gray">
            {notification.body}
          </p>
        </div>
        ))}
    </div>
   );
}
 
export default NotificationsFeed;