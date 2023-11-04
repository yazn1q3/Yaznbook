import Image from "next/image";

import useUser from "@/hooks/useUser";

import Avatar from "../Avatar"

interface UserHeroProps {
  userId: string;
}

const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
  const { data: fetchedUser } = useUser(userId);

  return ( 
    <div>
      <div className="bg-gray-200 rounded-[14px] h-44 relative">
        {fetchedUser?.coverImage && (
          <Image className=" rounded-[14px] h-44 relative" src={fetchedUser.coverImage} fill alt="Cover Image" style={{ objectFit: 'cover' }}/>
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar userId={userId} isLarge hasBorder />
        </div>
      </div>
    </div>
   );
}
 
export default UserHero;