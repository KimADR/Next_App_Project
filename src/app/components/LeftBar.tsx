import Link from "next/link";
import Image from "next/image";

const menuList = [
    {
      id: 1,
      name: "Homepage",
      link: "/",
      icon: "home.svg",
    },
    {
      id: 2,
      name: "Explore",
      link: "/",
      icon: "explore.svg",
    },
    {
      id: 3,
      name: "Notification",
      link: "/",
      icon: "notification.svg",
    },
    {
      id: 4,
      name: "Messages",
      link: "/",
      icon: "message.svg",
    },
    {
      id: 5,
      name: "Bookmarks",
      link: "/",
      icon: "bookmark.svg",
    },
    {
      id: 6,
      name: "Jobs",
      link: "/",
      icon: "job.svg",
    },
    {
      id: 7,
      name: "Communities",
      link: "/",
      icon: "community.svg",
    },
    {
      id: 8,
      name: "Premium",
      link: "/",
      icon: "logo.svg",
    },
    {
      id: 9,
      name: "Profile",
      link: "/",
      icon: "profile.svg",
    },
    {
      id: 10,
      name: "More",
      link: "/",
      icon: "more.svg",
    },
  ];


const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
        {/* LOGO MENU BUTTON */}
        <div className="">
            {/* LOGO */}
            <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
               <Image src="icons/logo.svg" alt="logo" width={24} height={24} />
            </Link>
            {/* MENU LIST */}
            <div className="flex flex-col gap-2">
          {menuList.map((item) => (
            <Link
              href={item.link}
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-2"
              key={item.id}
            >
              <Image
                src={`icons/${item.icon}`}
                alt={item.name}
                width={20}
                height={20}
              />
            <span className="text-sm hidden xl:inline">{item.name}</span>
            </Link>
          ))}
        </div> 
        </div>
        {/* USER */}
        <div className=""></div>
        {/* MENU */}
    </div>
  )
}

export default LeftBar