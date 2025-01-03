document.addEventListener('DOMContentLoaded', function() {
    // Lặp lại hiệu ứng sáng tối của trang web
    setInterval(function() {
        document.body.classList.toggle('dark-mode');
    }, 3000); // Chuyển đổi hiệu ứng sáng tối mỗi 3 giây
});
<script>
    function copyUsername() {
        const username = "@nem_nuong.";
        navigator.clipboard.writeText(username).then(() => {
            alert(`Copied to clipboard: ${username}`);
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    }
</script>
