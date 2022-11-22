import React from 'react';
import './Body.css';
import Darkcoffee from './Darkcoffee';
import Coldcoffee from './Coldcoffee';
import Voucher from './Voucher';
import About from './About';
import Reviews from './Reviews';
import Timings from './Timings';
import PageTitle from './PageTitle';
import Card from './Card';

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
    const timings = [
        {
            day: 'Monday - Thursday',
            time: '08:00 am - 08:00 pm'

        },
        {
            day: 'Friday - Sunday',
            time: '10:00 am - 12:00 pm'

        },
    ]
    const cities = [
        {
            pic: require('./images/newjersy.png'),
            city: 'new jersy',
            citybg: require('./images/citybg.png'),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repudiandae minus, adipisci dolorem quas est corporis sequi nulla vero natus ea eum, inventore quos aperiam iste provident et mollitia fugiat? Dolor, exercitationem a illo nostrum suscipit eius iste eos iusto!',

        },
        {
            pic: require('./images/newyork.png'),
            city: 'new york',
            citybg: require('./images/citybg.png'),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repudiandae minus, adipisci dolorem quas est corporis sequi nulla vero natus ea eum, inventore quos aperiam iste provident et mollitia fugiat? Dolor, exercitationem a illo nostrum suscipit eius iste eos iusto!',

        },
        {
            pic: require('./images/Texas.png'),
            city: 'texas',
            citybg: require('./images/citybg.png'),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repudiandae minus, adipisci dolorem quas est corporis sequi nulla vero natus ea eum, inventore quos aperiam iste provident et mollitia fugiat? Dolor, exercitationem a illo nostrum suscipit eius iste eos iusto!',

        }
    ]
 
    return (
        
        <div id='menu'>

            <Darkcoffee name={Coffees[0].nme} pic={Coffees[0].pic} text={Coffees[0].text} className={Coffees[0].class} />
            <Coldcoffee name={Coffees[1].nme} pic={Coffees[1].pic} text={Coffees[1].text} className={Coffees[1].class} />
            <Darkcoffee name={Coffees[2].nme} pic={Coffees[2].pic} text={Coffees[2].text} className={Coffees[2].class} />
            <Voucher />
            <About />
            <Reviews />
            <PageTitle title='we are open' />
            <div className='container'>
            {timings.map(e => <Timings day={e.day} time={e.time} />)}</div>
            <PageTitle title='our branches' />
            <div className="d-flex justify-content-center">
                {cities.map(e => {
                    return(
                    <div className="col-lg-4 col-md-6 mb-5" id='branches'>
                    <Card pic={e.pic} city={e.city} citybg={e.citybg} text={e.text}  />
                    </div>)
                })}
            </div>


        </div>
    )
}
export default Body;