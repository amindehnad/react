import heart from "../static/pick/icons8-heart-50 (1).png"
import comment from "../static/pick/icons8-comments-50.png"
import forward from "../static/pick/icons8-forward-arrow-50.png"
import bookmark from "../static/pick/icons8-bookmark-50 (1).png"
import heartRed from "../static/pick/icons8-heart-filid50 (2).png"
import bookmarkblack from "../static/pick/icons8-bookmark-fild50 (2).png" 
export default function Body(Props){
    function likeHandler(){
        Props.setpost( (pervitem)=> ({
            ...pervitem ,
            islile : !pervitem.islile,
            likecount : pervitem.islile ? pervitem.likecount -1 : pervitem.likecount+1
            }
        )   
    )
}
    function saveHandler(){
        Props.setpost( (pervitem)=> ({
            ...pervitem ,
            issaave : !pervitem.issaave,
            }
        )   
    )
}
    return(
        <section className="conteiner">
            <article className="post">
            <div className="top">
            <div className="img">

            <img src={Props.post.ProfileImg} alt="" />


            </div>

            <div className="username">
                <h4> {Props.post.UserName} </h4>
                <h6> {Props.post.location} </h6>
            </div>
        </div>
        <div className="postimg">
            <img src={Props.post.PostImg} alt="" />
        </div>
    <div className="bottom">
        <div className="btns">
            <div className="left">
    <div>
            <button onClick={likeHandler}> 
                {
                    Props.post.islile ?
                (
                <img src={heartRed} alt="" />
            )
                :
                (
                    <img src={heart} alt="" />
            )
            }
            </button>
         <h3> 
                {Props.post.likecount}
        </h3>
    </div>
        <div>
            <button>
                    <img src={comment} alt="" />
            </button>
            <h3> 
                    {Props.post.ComentCount} 
            </h3>
        </div>
        <div>
            <button>
            <img src={forward} alt="" />

            </button>
            <h3> 
                    {Props.post.sendcount} 
            </h3>
        </div>
            </div>

        <div className="right">
    <div>
            <button onClick={saveHandler}>
                {
                    Props.post.issaave ?
                        (
                        <img src={bookmarkblack} alt="" />
                    )
                    :
                        (
                        <img src={bookmark} alt="" />

                    )
                }
            </button>

    </div>
        </div>
        </div>
    </div>

    <div className="capition">
        <h2>
            {Props.post.UserName} :
            {Props.post.capition}
        </h2>
    </div>
                </article>
            </section>
    )
}