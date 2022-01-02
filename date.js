// console.log(module);

module.exports = getDate;

function getDate() {
    let today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let day = today.toLocaleDateString("en-US", options);

    return day;
}
