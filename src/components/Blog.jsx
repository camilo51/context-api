import { posts } from "../data/posts"
import { NavLink } from "react-router-dom";
import { Controles } from "./Controles";


export const Blog = () => {
  return (
    <div>
        <h2>Blog</h2>
        <ul>
          {
            posts.map((post) => {
              return (
                <li key={post.id}>
                  <NavLink to={`/post/${post.id}`}>{post.titulo}</NavLink>
                </li>
              )
            })
          }
        </ul>

        <Controles />
    </div>
  )
}
