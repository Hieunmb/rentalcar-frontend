import BreadCrumb from "../layouts/breadcrumb";
import Cars from "../layouts/cars";
import FilterCar from "../layouts/filter-car";

export default function CarSearch(){
    return(
    <div className="no-bottom no-top zebra" id="content">
        <div id="top"></div>

        <BreadCrumb/>

        <section id="section-cars">
            <div className="container">
                <div className="row">
                    <FilterCar/>

                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-12" style={{textAlign: "center"}}>
                                <p>Found 1 cars</p>
                            </div>
                           <Cars/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    )
}