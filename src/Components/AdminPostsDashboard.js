import { useEffect, useState } from "react";
function AdminAnnouncementsDashboard() {
  const [posts, setPosts] = useState([]);
  const [change, setChange] = useState(false);
  const apiUrl = "/posts";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((jsonfile) => {
        setPosts(jsonfile);
      });
  }, [apiUrl, change]);
  function handleDelete(id) {
    console.log(id, "test");
    fetch(`/posts/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        result.json();
      })
      .then((resp) => {
        // console.log(resp);
        // id=null
        setChange(true);
      });
    setChange(true);
  }
  return (
    <>
      <div className="flex">
        <aside className="w-30 fixed left-0  bg-[#272747] p-12 w-1/4 items-center h-screen">
          <h2 className="text-sky-50">
            <a href="/admin_home">Admin Dashboard</a>
          </h2>
          <div>
            <br />
            <br />
            <br />
          </div>
          <div className="h-96 ">
            <div className="absolute text-center pl-3  ">
              <p className="text-orange-600 hover:bg-orange-600  hover:text-sky-50 ">
                <a href="/admindashboard/users">Users</a>
              </p>
              <p className="text-orange-600 hover:bg-orange-600  hover:text-sky-50">
                <a href="/admindashboard/posts">Posts</a>
              </p>
              <p className="text-orange-600 hover:bg-orange-600  hover:text-sky-50">
                <a href="/admindashboard/announcements">Announcements</a>
              </p>
            </div>
          </div>
        </aside>
        <div>
          <div className="w-1/2 ml-96 ">
            <h1 className="font-bold text-2xl">Posts</h1> <br />
            <br />
            {posts.map((post, i) => {
              return (
                <div
                  className="bg-[#272747] mb-10 p-5 space-y-4 rounded-lg"
                  key={i}
                >
                  <h2 className="font-bold">{post.user.username}</h2>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-600 p-1 rounded-full float-right mt- space-x-2"
                  >
                    Delete
                  </button>
                  <h2 className=" text-blue-500 text-left">{post.title}</h2>{" "}
                  <img
                    className="place-content-center"
                    src={post.image}
                    alt={post.title}
                  />
                  <p>{post.content}</p>
                  <p>{post.likes}Likes </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminAnnouncementsDashboard;
