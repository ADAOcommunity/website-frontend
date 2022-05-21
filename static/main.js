const ENDPOINT = "http://localhost:8080/discord"

const tabs = document.querySelectorAll('[data-role="tab"]'),
  tabContents = document.querySelectorAll(".tab-panel"),
  members = document.getElementById("members"),
  supporters = document.getElementById("supporters"),
  builders = document.getElementById("builders"),
  core = document.getElementById("core")

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Tasteful.
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tc => {
      tc.classList.remove("is-active")
    })
    target.classList.add("is-active")

    tabs.forEach(t => {
      t.classList.remove("is-active")
    })
    tab.classList.add("is-active")
  })
});

async function startCounting() {
  try {
    const response = await fetch(ENDPOINT);
    const json = await response.json();

    if (json) {
      const data = json.json;
      const memberCount = data["members"]
      const supporterCount = data["supporters"]
      const builderCount = data["builders"]
      const coreCount = data["core"]

      var im = 0;
      var is = 0;
      var ib = 0;
      var ic = 0;

      const max = Math.max(memberCount, supporterCount, builderCount, coreCount);

      const memberTick = setInterval(function() {
        check(memberTick, memberCount, im);

        if (im < memberCount) {
          members.innerHTML = im;
        }

        im++;
      }, getUniqueTick(memberCount, max));

      const supporterTick = setInterval(function() {
        check(supporterTick, supporterCount, is);

        if (is < supporterCount) {
          supporters.innerHTML = is;
        }

        is++;
      }, getUniqueTick(supporterCount, max));

      const builderTick = setInterval(function() {
        check(builderTick, builderCount, ib);

        if (ib < builderCount) {
          builders.innerHTML = ib;
        }

        ib++;
      }, getUniqueTick(builderCount, max));

      const coreTick = setInterval(function() {
        check(coreTick, coreCount, ic);

        if (ic < coreCount) {
          core.innerHTML = ic;
        }

        ic++;
      }, getUniqueTick(coreCount, max));
    }
  } catch {}
}

async function check(pid, count, curr) {
  if (curr >= count) {
    clearInterval(pid);
  }
}

function getUniqueTick(count, max) {
  const magic = ((max / count));

  return magic;
}

const options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 0.2
}

function intersectionCounting(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) startCounting()
  })
}

const observer = new IntersectionObserver(intersectionCounting, options);
const target = document.querySelector('#counting');
observer.observe(target);