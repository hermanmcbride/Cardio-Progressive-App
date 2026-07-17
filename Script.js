// Progressive cardio data: weeks → days → blocks
const program = {
  1: {
    1: {
      title: "Day 1 — Easy Endurance Build",
      goal: "Get used to steady movement",
      blocks: [
        "0–3 min — Warm‑up walk (2.8–3.0 mph)",
        "3–8 min — Fast walk (3.3–3.6 mph)",
        "8–11 min — Recovery walk (3.0 mph)",
        "11–16 min — Fast walk again (3.3–3.6 mph)",
        "16–18 min — Cool down (2.5–2.8 mph)",
        "Optional — 30–45 sec light jog if you feel good"
      ]
    },
    2: {
      title: "Day 2 — Beginner Incline Walk",
      goal: "Low‑impact cardio + leg strength",
      blocks: [
        "0–3 min — 3.0 mph, incline 2%",
        "3–8 min — 3.0 mph, incline 4%",
        "8–12 min — 3.2 mph, incline 5%",
        "12–15 min — 3.0 mph, incline 2%",
        "Optional — 1–2 rounds: squats, wall push‑ups, plank"
      ]
    },
    3: {
      title: "Day 3 — Beginner Intervals",
      goal: "Build heart‑rate recovery",
      blocks: [
        "Repeat 6–8×:",
        "1 min fast walk (3.4–3.6 mph)",
        "1 min easy walk (2.8–3.0 mph)",
        "Optional — swap one fast minute for a light jog (4.0–4.3 mph)"
      ]
    },
    4: {
      title: "Day 4 — Beginner Mixed Cardio Circuit",
      goal: "Full‑body conditioning without intensity spikes",
      blocks: [
        "Repeat 2–3×:",
        "Bike — 45 sec (easy pace)",
        "Step‑ups — 10 each leg",
        "Row machine — 45 sec (easy pace)",
        "Rest — 45–60 sec",
        "Optional — 2–3 min incline walk (3.0 mph, 3–4%)"
      ]
    }
  },

  // Week 2: slightly longer / slightly faster
  2: {
    1: {
      title: "Day 1 — Endurance Build (Step Up)",
      goal: "Increase time at fast walk / light jog",
      blocks: [
        "0–3 min — Warm‑up walk (2.8–3.0 mph)",
        "3–10 min — Fast walk (3.4–3.7 mph)",
        "10–13 min — Recovery walk (3.0 mph)",
        "13–18 min — Fast walk or light jog (3.6–4.2 mph)",
        "18–20 min — Cool down (2.5–2.8 mph)"
      ]
    },
    2: {
      title: "Day 2 — Incline Walk Plus",
      goal: "Leg strength + slightly more incline",
      blocks: [
        "0–3 min — 3.0 mph, incline 3%",
        "3–9 min — 3.0 mph, incline 5%",
        "9–13 min — 3.2 mph, incline 6%",
        "13–17 min — 3.0 mph, incline 3%",
        "Optional — 2 rounds: squats, wall push‑ups, plank"
      ]
    },
    3: {
      title: "Day 3 — Intervals (More Rounds)",
      goal: "Improve recovery with more intervals",
      blocks: [
        "Repeat 8–10×:",
        "1 min fast walk (3.5–3.8 mph)",
        "1 min easy walk (2.8–3.0 mph)",
        "Optional — 2–3 fast minutes as light jog"
      ]
    },
    4: {
      title: "Day 4 — Mixed Cardio Circuit (Longer)",
      goal: "Slightly longer conditioning",
      blocks: [
        "Repeat 3×:",
        "Bike — 60 sec (easy–moderate pace)",
        "Step‑ups — 12 each leg",
        "Row machine — 60 sec",
        "Rest — 45–60 sec",
        "Optional — 3–4 min incline walk (3.0 mph, 4–5%)"
      ]
    }
  },

  // Week 3: edging toward intermediate
  3: {
    1: {
      title: "Day 1 — Jog-Heavy Endurance",
      goal: "Introduce more consistent jogging",
      blocks: [
        "0–3 min — Warm‑up walk (2.8–3.0 mph)",
        "3–10 min — Fast walk / light jog (3.6–4.3 mph)",
        "10–13 min — Recovery walk (3.0 mph)",
        "13–20 min — Light jog (4.2–4.8 mph)",
        "20–22 min — Cool down (2.5–2.8 mph)"
      ]
    },
    2: {
      title: "Day 2 — Strong Incline Walk",
      goal: "Leg endurance + higher incline",
      blocks: [
        "0–3 min — 3.0 mph, incline 4%",
        "3–10 min — 3.0 mph, incline 6%",
        "10–15 min — 3.2 mph, incline 7%",
        "15–18 min — 3.0 mph, incline 4%",
        "Optional — 2–3 rounds: squats, push‑ups, plank"
      ]
    },
    3: {
      title: "Day 3 — Jog Intervals",
      goal: "Cardio + speed",
      blocks: [
        "Repeat 8–10×:",
        "1 min light jog (4.5–5.2 mph)",
        "1 min walk (3.0 mph)",
        "Optional — last 2 rounds slightly faster"
      ]
    },
    4: {
      title: "Day 4 — Mixed Cardio Circuit (Moderate)",
      goal: "Full‑body conditioning at moderate effort",
      blocks: [
        "Repeat 3×:",
        "Bike — 60–75 sec (moderate pace)",
        "Step‑ups — 12–14 each leg",
        "Row machine — 60–75 sec",
        "Rest — 45 sec",
        "Optional — 4–5 min incline walk (3.0 mph, 5–6%)"
      ]
    }
  },

  // Week 4: solid base, close to intermediate
  4: {
    1: {
      title: "Day 1 — Steady Jog Endurance",
      goal: "Hold a comfortable jog for longer",
      blocks: [
        "0–4 min — Warm‑up walk (2.8–3.0 mph)",
        "4–12 min — Light jog (4.5–5.0 mph)",
        "12–15 min — Recovery walk (3.0 mph)",
        "15–24 min — Light jog (4.8–5.3 mph)",
        "24–26 min — Cool down (2.5–2.8 mph)"
      ]
    },
    2: {
      title: "Day 2 — Strong Incline + Strength",
      goal: "Leg strength + cardio",
      blocks: [
        "0–3 min — 3.0 mph, incline 5%",
        "3–10 min — 3.0 mph, incline 7%",
        "10–16 min — 3.2 mph, incline 8%",
        "16–20 min — 3.0 mph, incline 5%",
        "Optional — 3 rounds: squats, push‑ups, plank"
      ]
    },
    3: {
      title: "Day 3 — Faster Intervals",
      goal: "Speed + recovery",
      blocks: [
        "Repeat 8–10×:",
        "1 min jog (5.0–5.8 mph)",
        "1 min walk (3.0 mph)",
        "Optional — last 2 rounds at 6.0 mph"
      ]
    },
    4: {
      title: "Day 4 — Mixed Cardio Circuit (Stronger)",
      goal: "Higher effort conditioning",
      blocks: [
        "Repeat 3–4×:",
        "Bike — 75 sec (moderate–strong pace)",
        "Step‑ups — 14–16 each leg",
        "Row machine — 75 sec",
        "Rest — 45 sec",
        "Optional — 5–6 min incline walk (3.0 mph, 6–7%)"
      ]
    }
  }
};

// DOM elements
const weekSelect = document.getElementById("weekSelect");
const dayButtons = document.querySelectorAll(".day-btn");
const dayContent = document.getElementById("dayContent");
const checklist = document.getElementById("checklist");

// LocalStorage key
const STORAGE_KEY = "cardio_progress_v1";

function getProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function renderDay(week, day) {
  const data = program[week][day];

  dayContent.innerHTML = `
    <h2>${data.title}</h2>
    <p><strong>Goal:</strong> ${data.goal}</p>
    <ul>
      ${data.blocks
        .map(block => `<li>${block}</li>`)
        .join("")}
    </ul>
  `;

  renderChecklist(week, day, data.blocks);
}

function renderChecklist(week, day, blocks) {
  const progress = getProgress();
  const key = `${week}-${day}`;
  const completed = progress[key] || [];

  checklist.innerHTML = "";

  blocks.forEach((block, index) => {
    const id = `check-${week}-${day}-${index}`;
    const isDone = completed.includes(index);

    const li = document.createElement("li");
    li.className = "check-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;
    checkbox.checked = isDone;

    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = block;
    if (isDone) {
      label.classList.add("completed");
    }

    checkbox.addEventListener("change", () => {
      const progressNow = getProgress();
      const arr = progressNow[key] || [];
      if (checkbox.checked) {
        if (!arr.includes(index)) arr.push(index);
      } else {
        const idx = arr.indexOf(index);
        if (idx !== -1) arr.splice(idx, 1);
      }
      progressNow[key] = arr;
      saveProgress(progressNow);

      if (checkbox.checked) {
        label.classList.add("completed");
      } else {
        label.classList.remove("completed");
      }
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    checklist.appendChild(li);
  });
}

// Day button handling
dayButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    dayButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const week = parseInt(weekSelect.value, 10);
    const day = parseInt(btn.dataset.day, 10);
    renderDay(week, day);
  });
});

// Week change handling
weekSelect.addEventListener("change", () => {
  const activeBtn = document.querySelector(".day-btn.active") || dayButtons[0];
  const week = parseInt(weekSelect.value, 10);
  const day = parseInt(activeBtn.dataset.day, 10);
  renderDay(week, day);
});

// Initial render
renderDay(parseInt(weekSelect.value, 10), 1);
