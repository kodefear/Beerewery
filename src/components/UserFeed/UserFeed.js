import React from 'react'
import { Link} from 'react-router-dom'


function UserFeed({isAuthenticated, commentData}){
    return(
        <div className="list-group">
            {
                commentData.map((comment, index) =>
                    (
                        <div className="list-group-item text-truncate">
                            {
                                isAuthenticated &&
                                    <div>
                                        <Link to={`/profile/${comment.userId._id}`}>
                                            <strong>{comment.userId.username}: </strong>
                                        </Link>
                                        <Link to={`/beer/${comment.beerId}`}>
                                            commented about blabla: "{comment.comment}"
                                        </Link>
                                    </div>

                            }
                            {
                                !isAuthenticated &&
                                <div className="text-primary">
                                    <strong>{comment.userId.username}: </strong> commented about blabla: "{comment.comment}"
                                </div>
                            }
                        </div>
                    )
                )
            }
        </div>
    )
}

export default UserFeed;