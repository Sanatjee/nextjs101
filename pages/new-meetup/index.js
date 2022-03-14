import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
    function addMeetupHandler(enteredMeetUpData) {
        console.log(enteredMeetUpData)
    }
    return <>

        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
}

export default NewMeetUpPage;