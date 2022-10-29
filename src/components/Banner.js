import Button from "./Button";
const Banner = () => {

    return (
        <div className="row margin-l-xs">
            <div className="col-md-6 ms-5">
                <div className="row">
                    <div className="col-11 margin-l-xs">
                        <h1 className="title-coffee xxs-center">Coffee</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <p className="text-capitalize headline xxs-center">Everthing you love about coffee</p>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-sm-9">
                        <p className="description xxs-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus deserunt quos repellendus adipisci vero culpa. Totam numquam vero quam perferendis explicabo quia dolorem facere ducimus saepe repellat.</p>
                    </div>
                </div>



                <div className="row">
                    <div className="col-12 justify-content-center">
                        <Button />
                    </div>
                </div>

                <div className="row spacer">

                </div>
            </div>
        </div>

    )
}
export default Banner;