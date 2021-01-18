import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
const UserList = ({user}) => {
    return (
        <div>
        <div class="wrapper">
          <div class="cards">
            <figure class="card">
              <img src="https://lh3.googleusercontent.com/proxy/VbPmVnwYZi1hhA14yDTdU34DW3t7EbLRfYdY3mrsRTSBEgfgWGYqhvjSBo29Xq8HZRmATpSE1s4O6FT3eWmBSPJK9fq87chiFPU5WOyUOimL04ADp_-Rqd1cSdfASOezke26nz5v"/>
              <figcaption>
                {user.name} <br />
                {user.username} <br />
                {user.email}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    )
}

export default UserList
