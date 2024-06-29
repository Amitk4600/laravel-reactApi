import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [select, setslect] = useState([null]);

    const fetchPosts = () => {
        fetch("./api/data")
            .then((respose) => respose.json())
            .then((data) => {
                setPosts(data.data);
            })
            .catch((error) => {
                console.log("there is an error", error);
            });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleShowAll = () => {
        fetchPosts();
    };
    return (
        <div>
            <h1>Hello welcome to home page </h1>
            <button className="btn btn-primary" onClick={handleShowAll}>
                Display
            </button>
            {
              posts.length>0&&(
                <div>
                  <h2>Member details</h2>
                  <table border="1" className="table table-info ">
                    <thead className="table table-warning ">
                      <tr >
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>email</th>
                        <th>phone</th>
                      </tr>
                    </thead>
                    <tbody className="table table-dark table-striped ">
                      {posts.map((post) => (
                        <tr key={post.id}>
                          <td>{post.firstname}</td>
                          <td>{post.lastname}</td>
                          <td>{post.email}</td>
                          <td>{post.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            }
        </div>
    );
};

export default HomePage;
