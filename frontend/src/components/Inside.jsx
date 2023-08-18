import React from "react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

export default function Inside() {
  const { userInfo } = useSelector((state) => state.auth);
  const blogs = [
    {
      _id: "244164cadbd363b1",
      username: "sam deo",
      date: "Mar 12",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      _id: "244164cadbd363b1",
      username: "sam deo",
      date: "Mar 12",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      _id: "244164cadbd363b1",
      username: "sam deo",
      date: "Mar 12",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      _id: "244164cadbd363b1",
      username: "sam deo",
      date: "Mar 12",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  return (
    <div>
      <div className="border-b pb-4">
        <h1 className="text-3xl">Welcome {userInfo.name}!</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        {blogs.map((blog) => (
          <div className="mx-6 mb-10 h-4/5">
            {/* header */}
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <FaUserCircle />
                <p>{blog.username}</p>
                <p className="text-gray-500 text-sm">{blog.date}</p>
              </div>
            </div>
            {/* content */}
            <div className="flex items-center justify-between">
              {/* left content */}
              <div className=" w-2/3 ">
                <h1 className="text-lg md:text-2xl font-medium">
                  {blog.title}
                </h1>
                <p className="text-sm md:text-base hidden lg:block">
                  {blog.content.substring(0, 180)}
                </p>
              </div>
              {/* right content */}
              <div className="">
                <img
                  src={blog.image}
                  className="w-28 md:w-40 h-auto  object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
