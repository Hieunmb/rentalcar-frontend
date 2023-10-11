export default function FilterCar(){
    return(
        <div className="col-lg-3">
    <div className="item_filter_group">
        <h4>Search Car</h4>
        <form action="/car-search" method="get">
            <div className="input-group">
                <input type="text" value="" name="q" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{borderColor: "rgb(222,222,222)"}} />
                <button style={{fontSize: "12px"}} type="submit" className="btn btn-primary">search</button>
            </div>
        </form>
    </div>

    <div className="item_filter_group">
        <h4>Car Type</h4>
        <div className="de_form">
            @foreach($carTypes as $item1)
                <div className="de_checkbox">
                    <a className="icon-link icon-link-hover" href="">
                        <button type="button" className="btn btn-outline-success btn-sm"><span>KIA</span>
                            <img src="{{$item1->icon}}" className="img-fluid" alt="" width="28px"/>
                        </button>
                    </a>
                </div>
            @endforeach
        </div>
    </div>

    <div className="item_filter_group">
        <h4>Brands</h4>
        <div className="de_form">
            <div className="de_checkbox">
                <a className="icon-link icon-link-hover" href="">
                    <button type="button" className="btn btn-outline-success btn-sm">KIA
                        <img src="{{$item->icon}}" className="img-fluid" alt="" width="28px"/>
                    </button>
                </a>
            </div>
        </div>
    </div>

    <div className="item_filter_group">
        <h4>Car Seats</h4>
        <div className="de_form">
                <div className="de_checkbox">
                    <a className="icon-link icon-link-hover" href="">
                        <button type="button" className="btn btn-outline-success btn-sm">
                            Seats: 4
                        </button>
                    </a>
                </div>
        </div>
    </div>


    <div className="item_filter_group">
        <h4>Price ($)</h4>
        <form action="{{ url('/car-filter/price') }}" method="get" id="price-filter-form">
            <div className="price-input">
                <div className="field">
                    <span>Min:</span>
                    <input type="number" className="input-min" name="min_price" value="{{ app('request')->input('min_price', 0) }}"/>
                </div>
                <div className="field">
                    <span>Max:</span>
                    <input type="number" className="input-max" name="max_price" value="{{ app('request')->input('max_price', 500) }}"/>
                </div>
            </div>
            <div className="slider">
                <div className="progress"></div>
            </div>
            <div className="range-input">
                <input type="range" className="range-min" min="0" max="500" name="min_price_range" value="{{ app('request')->input('min_price', 0) }}" step="1"/>
                <input type="range" className="range-max" min="0" max="500" name="max_price_range" value="{{ app('request')->input('max_price', 500) }}" step="1"/>
            </div>
            <button type="submit" className="btn btn-primary btn-filter">Filter</button>
        </form>
    </div>
</div>
    )
}