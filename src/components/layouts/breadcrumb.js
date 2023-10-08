import { useParams } from 'react-router-dom'
export default function BreadCrumb(){
    const location = window.location.pathname
    const { title } = useParams()
    if (location === '/cars') {
        title = 'Cars'
      } else if (location === '/contact') {
        title = 'Contact'
      }    
    return(
<section id="subheader" className="jarallax text-light">
    <img src="images/background/2.jpg" className="jarallax-img" alt=""/>
    <div className="center-y relative text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>{title}</h1>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    </div>
</section>
    )
}
