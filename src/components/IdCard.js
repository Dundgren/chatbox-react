export default function IdCard({ userData }) {
    return (
        <div className="id-card">
            <p>
                <b>{ userData.username }</b> <br />
                Age: { userData.age }<br />
                Sex: { userData.sex }<br />
                Location: { userData.location }<br />
            </p>
        </div>
    )
}
