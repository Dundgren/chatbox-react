export default function LogoutButton({ setUserData }) {
    function handleClick() {
        setUserData({
            username: "",
            userId: "",
            age: "",
            sex: "",
            location: ""
        })
    }

    return (
        <input type="button" value="Logout" className="logout-button" onClick={handleClick} />
    )
}