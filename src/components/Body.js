import React from 'react';
import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import './Body.css';
import Darkcoffee from './Darkcoffee';
import Coldcoffee from './Coldcoffee';
import Voucher from './Voucher';
import About from './About';
import Reviews from './Reviews';
import Timings from './Timings';

const Body = () => {
    const Coffees = [
        {
            nme: "Dark Coffees",
            pic: require('./images/darkcofeecup.png'),
            class: 'drak-coffee-backgroundimg',
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum blanditiis, dolorum praesentium natus cum nesciunt ad ipsum esse ab culpa quae ipsa sed possimus iure eaque unde explicabo consectetur necessitatibus animi omnis, alias totam. Commodi, quia ducimus amet quasi officiis saepe at dicta nobis aut iusto modi corporis sit quae. Odio blanditiis error explicabo voluptas, officia quidem incidunt eius natus eveniet nobis. Voluptatum repudiandae labore sapiente obcaecati ut velit alias vitae facere? Soluta maxime dolores quidem aspernatur repellat. Nam cupiditate quisquam magni earum explicabo a iste nisi aliquid inventore, adipisci, culpa tempore maxime suscipit, modi ratione. Quisquam totam vero itaque."
        },
        {
            nme: "Cold Coffees",
            pic: require('./images/coldcofeecup.png'),
            class: 'cold-coffee-backgroundimg',
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum blanditiis, dolorum praesentium natus cum nesciunt ad ipsum esse ab culpa quae ipsa sed possimus iure eaque unde explicabo consectetur necessitatibus animi omnis, alias totam. Commodi, quia ducimus amet quasi officiis saepe at dicta nobis aut iusto modi corporis sit quae. Odio blanditiis error explicabo voluptas, officia quidem incidunt eius natus eveniet nobis. Voluptatum repudiandae labore sapiente obcaecati ut velit alias vitae facere? Soluta maxime dolores quidem aspernatur repellat. Nam cupiditate quisquam magni earum explicabo a iste nisi aliquid inventore, adipisci, culpa tempore maxime suscipit, modi ratione. Quisquam totam vero itaque."
        },
        {
            nme: "Hot Coffees",
            pic: require('./images/hotcofeecup.png'),
            class: 'hot-coffee-backgroundimg',
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum blanditiis, dolorum praesentium natus cum nesciunt ad ipsum esse ab culpa quae ipsa sed possimus iure eaque unde explicabo consectetur necessitatibus animi omnis, alias totam. Commodi, quia ducimus amet quasi officiis saepe at dicta nobis aut iusto modi corporis sit quae. Odio blanditiis error explicabo voluptas, officia quidem incidunt eius natus eveniet nobis. Voluptatum repudiandae labore sapiente obcaecati ut velit alias vitae facere? Soluta maxime dolores quidem aspernatur repellat. Nam cupiditate quisquam magni earum explicabo a iste nisi aliquid inventore, adipisci, culpa tempore maxime suscipit, modi ratione. Quisquam totam vero itaque."
        }

    ]
    const timings=[
        {
        day: 'Monday - Thursday',
        time: '08:00 am - 08:00 pm'

    },
        {
        day: 'Friday - Sunday',
        time: '10:00 am - 12:00 pm'

    },
]
    return (
        <div>

            <Darkcoffee name={Coffees[0].nme} pic={Coffees[0].pic} text={Coffees[0].text} className={Coffees[0].class} />
            <Coldcoffee name={Coffees[1].nme} pic={Coffees[1].pic} text={Coffees[1].text} className={Coffees[1].class} />
            <Darkcoffee name={Coffees[2].nme} pic={Coffees[2].pic} text={Coffees[2].text} className={Coffees[2].class} />
            <Voucher />
            <About />
            <Reviews />
            <div className="row text-center text-capitalize top-margin-open mb-5">
                <div className="col-12 font-open">
                    we are open
                </div>
            </div>
           {timings.map(e=><Timings day={e.day} time={e.time} />)}
            

        </div>
    )
}
export default Body;