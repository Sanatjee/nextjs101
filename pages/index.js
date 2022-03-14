import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "Eiffel Tower",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
        address: "This is a test",
        description: "Test again"
    },

    {
        id: "m2",
        title: "Taj Mahal",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
        address: "This is a test",
        description: "Test again"
    }
];

function HomePage() {
    return (

        <MeetupList meetups={DUMMY_MEETUPS} />

    )
}

export default HomePage;