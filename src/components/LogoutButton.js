export default function LogoutButton({ setUserData }) {
    function handleClick() {
        setUserData((oldData) => {
            return {
                ...oldData,
                username: "",
                userId: ""
            }
        })
    }

    return (
        <input type="button" value="Logout" className="logout-button" onClick={handleClick} />
    )
}