// Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".service-card").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
});

// Forex API
async function loadRates() {
    try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();

        const r = data.rates;

        document.getElementById("rates-container").innerHTML = `
            <div class="rate-box">USD → INR: ₹${r.INR}</div>
            <div class="rate-box">USD → EUR: €${r.EUR}</div>
            <div class="rate-box">USD → GBP: £${r.GBP}</div>
            <div class="rate-box">USD → AED: د.إ${r.AED}</div>
        `;

    } catch {
        document.getElementById("rates-container").innerText = "Error loading rates";
    }
}

loadRates();