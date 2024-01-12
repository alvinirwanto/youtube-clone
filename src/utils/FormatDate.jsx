export default function formatDate(dateString) {
    return (
        new Date(dateString).toLocaleDateString('en-EN',
            {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
        )
    )
}
