/**
 * LoseLeafCalendar.
 * @class
 */
class LoseLeafCalendar {
  /**
   * @param {Date} [date=new Date] - Use start date 'today' is default.
   * @param {Date | null} [end] - End is the end of current year.
   */
  constructor(date = new Date(), end = null) {
    this.currentDate = date;
    this.endDate = end || new Date(date.getFullYear(), 11, 31);
    this.tearedLeaves = 0;
    this._initDate = new Date(this.currentDate);
    // We are not interested in time here. So reset it to midnight.
    this.currentDate.setHours(0, 0, 0, 0);
    this.endDate.setHours(0, 0, 0, 0);
  }
  /**
   * @type {HTMLDivElement}
   */
  get calendar() {
    return document.getElementById("calendar");
  }
  /**
   * @type {HTMLTemplateElement}
   */
  get template() {
    return document.getElementById("calendar-sheet-tpl");
  }
  /**
   * @type {NodeList<HTMLTimeElement>}
   */
  get leaves() {
    return this.calendar.querySelectorAll(".leaf");
  }
  /**
   * @type {NodeList<HTMLTimeElement>}
   */
  get calendarScraps() {
    return this.calendar.querySelectorAll(".calendar__scraps");
  }
  /**
   * @param {Date} date
   * @return {DocumentFragment}
   */
  createLeaf(date) {
    const leaf = this.template.content.cloneNode(true);
    const year = date.getFullYear();
    leaf.querySelector(".leaf__year").innerText = year;
    const month = date.toLocaleString("default", { month: "long" });
    leaf.querySelector(".leaf__month").innerText = month;
    const weekday = date.toLocaleString("default", { weekday: "long" });
    leaf.querySelector(".leaf__weekday").innerText = weekday;
    leaf.querySelector(".leaf__day").innerText = date.getDate();
    const timeElem = leaf.querySelector("time");
    timeElem.setAttribute("datetime", date.toISOString());
    if (date.getDay() === 6 || date.getDay() === 0) {
      timeElem.classList.add("-weekend");
    }
    timeElem.style.setProperty("--rot", Math.random() * 2 - 1 + "deg");
    timeElem.style.setProperty("--xdir", Math.random() * 300 - 150 + "%");
    timeElem.style.setProperty("--ydir", Math.random() * 100 + 200 + "%");
    timeElem.style.setProperty("--rdir", Math.random() * 100 - 50 + "deg");
    return leaf;
  }
  /**
   * Builds all leaves for calendar.
   */
  buildCalendar() {
    while (this.currentDate <= this.endDate) {
      const leaf = this.createLeaf(this.currentDate);
      this.calendar.prepend(leaf);
      this.currentDate.setDate(this.currentDate.getDate() + 1);
    }
  }
  /**
   * @param {} leaf
   */
  tearLeaf(leaf) {
    leaf.classList.add("-teared");
    leaf.tabIndex = -1;
    if (this.tearedLeaves < this.calendarScraps.length) {
      this.calendarScraps[this.tearedLeaves].hidden = false;
    }
    const prev = leaf.previousElementSibling;
    if (prev) {
      prev.classList.remove("-hidden");
      prev.focus();
    }
    ++this.tearedLeaves;
  }
  /**
   * Add events.
   */
  hydrate() {
    this.leaves.forEach((l) => {
      l.addEventListener("click", () => this.tearLeaf(l));
      l.addEventListener("keydown", (e) => {
        if (["Enter", "Space", "ArrowDown"].includes(e.code)) {
          e.preventDefault();
          this.tearLeaf(e.target);
        }
      });
      l.addEventListener("transitionend", (e) => e.target.remove());
    });
  }
  /**
   * Setup some accessibility features.
   */
  setupAccessibility() {
    this.leaves.forEach((leaf) => {
      leaf.tabIndex = 0;
      leaf.classList.add("-hidden");
      leaf.setAttribute("role", "button");
    });
    this.leaves[this.leaves.length - 1].classList.remove("-hidden");
    this.leaves[this.leaves.length - 1].focus();
  }
  /**
   * Resets the calendar and starts from the beginning.
   */
  reset() {
    this.currentDate = new Date(this._initDate);
    this.leaves.forEach((l) => l.remove());
    this.initAll();
    this.tearedLeaves = 0;
  }
  /**
   * Run all methods to fully init calendar.
   */
  initAll() {
    this.buildCalendar();
    this.hydrate();
    this.setupAccessibility();
  }
  /**
   * Tear all leaves automatically.
   */
  tearAll() {
    let i = this.leaves.length;
    const interval = setInterval(() => {
      if (i <= 1) {
        clearInterval(interval);
      }
      this.tearLeaf(this.leaves[--i]);
    }, 80);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const leafLooseCalendar = new LoseLeafCalendar();
  const tearAllBtn = document.getElementById("tear-all");
  const resetBtn = document.getElementById("reset");
  leafLooseCalendar.initAll();
  tearAllBtn.addEventListener("click", () => leafLooseCalendar.tearAll());
  resetBtn.addEventListener("click", () => leafLooseCalendar.reset());
});
