

jQuery(document).ready(function($){

  
  const afisha = $('.afisha')[0];
  const categoryContainer = $('.afisha__category-container')[0];
  const serverContent = $('.server-content')[0];

  const afishaCalendarContainer = $('.afisha__calendar-swiper')[0];
  const afishaSwiperWrapper = $(afishaCalendarContainer).find('.swiper-wrapper')[0];
  const afishaList = $('.afisha__list')[0];

  function newuser() {
    return fetch(`https://widget.telegreen.ru/api/data/index.php`, {
    // mode: 'no-cors',
    method: 'POST',
    headers: { 
    'Content-Type': 'application/json',
    'Authorization': `Bearer f1c1592588411002af340cbaedd6fc33`,
    },
    body: JSON.stringify({"lang":"ru","CMD":"newuser", onlystart: 1})
    })
    .then(res => res.json())
    .then(obj => {
      console.log(obj)
      return {
        sidhash: obj.sidhash,
        themes: obj.themes,
        hash: obj.hash,
        promocode: obj.promocode,
        promocode_id: obj.promocode_id,
      }
    })
    .catch(err => console.log(err))
  }

  function getAfisha (filter, sidhash) {
    console.log(sidhash)
    const body = Object.assign({"CMD":"events"}, filter); 
  
    return fetch(`https://widget.telegreen.ru/api/data/index.php`, {
    method: 'POST',
    headers: { 
    'Content-Type': 'application/json',
    'Authorization': `Bearer f1c1592588411002af340cbaedd6fc33`,
    sidhash: sidhash,
    },
    body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(obj => {
      if(obj.error) throw new Error(obj.error);
      return obj;
    })
    .catch(err => {
      throw new Error('что то пошло не так')
    })
  }

  function createCalendar () {

    let today = moment().locale('ru').format('YYYY-MM-DD');
    let lastDay = moment(today).locale('ru').add(1, 'year').format('YYYY-MM-DD');

    let  nextDay = today;
    let x = -1;
    
    let readyCalendar = [];

    let daysArr = [];
    let monthArr = [];

    for (let i = 0; i <= 12; ++i) {
      let month = moment().locale('ru').add(i, 'month').format('MM');
      let monthName = moment().locale('ru').add(i, 'month').format('MMMM');
      let year = moment().locale('ru').add(i, 'month').format('YYYY');
      readyCalendar.push({month, monthName, year, fulldate: []})
    }

    

    while (nextDay < lastDay) {
      x += 1;
      nextDay = moment(today).locale('ru').add(x, 'days').format('YYYY-MM-DD');
      daysArr.push(nextDay)
    }

    daysArr.forEach(date => {
      let dateMonth =  moment(date).locale('ru').format('MM');
      let dateYear = moment(date).locale('ru').format('YYYY');
      readyCalendar.forEach(element => {
        if (element.month == dateMonth && element.year == dateYear) {
          element.fulldate.push({date: date, weekday: moment(date).locale('ru').format('dd'), date_view: moment(date).locale('ru').format('D')});
        }
      })
    })

    return readyCalendar;
  }

  function createCalendarSlider (calendarDate) {
    calendarDate.forEach((date, index) => {
      const periodContainer = document.createElement('div');

      periodContainer.className = 'afisha__period-container';
      const monthContainer = document.createElement('div');
      monthContainer.className = document.createElement('div');
      monthContainer.className = 'afisha__month-container';
      periodContainer.append(monthContainer);
      const month = document.createElement('div');
      month.className = 'afisha__month';
      month.textContent = `${date.monthName}/${date.year}`;
      monthContainer.append(month);

      const daysContainer = document.createElement('div');
      daysContainer.className = 'afisha__days-container';
      periodContainer.append(daysContainer);

      date.fulldate.forEach(element => {
        const dayBlock = document.createElement('button');
        dayBlock.setAttribute('data-fulldate', `${moment(element.date).locale('ru').format('DD.MM.YYYY')}`);
        dayBlock.className = 'afisha__day-td';
        const date = document.createElement('div');
        date.className = 'afisha__day';
        date.textContent = `${element.date_view}`;

        const weekDay = document.createElement('div');
        weekDay.className = 'afisha__weekName';
        weekDay.textContent = `${element.weekday}`;

        if (element.weekday == 'сб' || element.weekday == 'вс') {
          dayBlock.classList.add('output');
        }

        dayBlock.append(date, weekDay);
        daysContainer.append(dayBlock);
      })
      
      const swiperSlide = document.createElement('div');
      swiperSlide.className = 'swiper-slide afisha__calendar-slider';
      afishaSwiperWrapper.append(swiperSlide);
      swiperSlide.append(periodContainer)
    })
  }

  function createList (objAfisha, sidhash) {
    serverContent.innerHTML = 'идет загрузка мероприятий';
    
    
    getAfisha(objAfisha, sidhash).then(res => {
      afishaList.innerHTML = '';
      serverContent.innerHTML = '';
      const afishaArr = res.r;
      if (afishaArr && afishaArr.length > 0) {
        afishaArr.forEach(event => {
          const li = document.createElement('li');
          li.className = 'afisha__list-part';
          li.setAttribute('data-key', `${event.ename} ${event.short_description}  ${event.org_name}`);
          const imgContainer = document.createElement('div');
          imgContainer.className = 'afisha__list-part-img-block';
  
          const img = document.createElement('img');
          img.alt = `${event.ename}`;
          img.src = '../assets/img/afisha.png';
          imgContainer.append(img)
  
          const contentContainer = document.createElement('div');
          contentContainer.className = 'afisha__list-part-content-block';
          const textTop = document.createElement('div');
          textTop.className = 'afisha__list-part-text-bold';
          const textDate = document.createElement('div');
          textDate.className = 'afisha__list-part-date';
          textDate.textContent = `${event.start_date} ${event.start_time}`;
          const textCategory = document.createElement('div');
          textCategory.className = 'afisha__list-part-category';
          textCategory.textContent = `${event.themes_name}`
          textTop.append(textDate, textCategory);
          contentContainer.append(textTop);
          const textEventName = document.createElement('div');
          textEventName.className = 'afisha__list-part-event-name';
          textEventName.textContent = `${event.ename}`;
          textTop.append(textEventName)
  
          const textBottom = document.createElement('div');
          textBottom.className = 'afisha__list-part-text';
          const btn = document.createElement('button');
          btn.className = 'afisha__list-part-btn';
          btn.textContent = 'Купить билет';
          textBottom.append(btn);
          contentContainer.append(textBottom);
  
          li.append(imgContainer, contentContainer)
          afishaList.append(li)
        })
      } else {
        serverContent.innerHTML = 'мероприятий нет';
      }
    })
  }

  function filterBtn () {
    const categoryBtn = Array.from($('.afisha__category-part'));
    const dateBtn  = Array.from($('.afisha__day-td'));
    if (dateBtn.length > 0) {
      dateBtn.forEach(el => {
        el.addEventListener('click', (еv) => {
          el.classList.toggle('filter');
          dateBtn.forEach(element => {
            if (el !== element) {
              element.classList.remove('filter');
            }
          });
        })
      })
    }
    if (categoryBtn.length > 0) {
      categoryBtn.forEach(el => {
  
        el.addEventListener('click', (e) => {
          el.classList.toggle('filter');

          categoryBtn.forEach(element => {
            if (element !== e.currentTarget) {
              element.classList.remove('filter');
            }
          });
        })
      })
    }
  }


  function getFilterAfisha (objAfisha, sidhash) {
    const categoryBtn = Array.from($('.afisha__category-part'));
    const dateBtn  = Array.from($('.afisha__day-td'));
    const filterBtns = [...categoryBtn, ...dateBtn];

    filterBtns.forEach(el => {
      el.addEventListener('click', (e) => {
        
        const activeBtn = filterBtns.filter(el => el.classList.contains('filter'));
        const filterObj = {};
        let date;
        let theme_id;
        activeBtn.forEach(el => {
          if ($(el).attr('data-fulldate')) {

            date = $(el).attr('data-fulldate');
          }

          if ($(el).attr('theme_id')) {

            theme_id = $(el).attr('theme_id');
          }
        })

          if (date) {
            filterObj.date = date;
          } else {
            filterObj.date_to = objAfisha.date_to;
            filterObj.date_from = objAfisha.date_from;
          }
          if (theme_id) {
            filterObj.themes = theme_id;
          } else {
            filterObj.themes = objAfisha.themes;
          }
          console.log(filterObj)
          createList (filterObj, sidhash) 
      })
    })
  }


  if (afisha) {

    const calendarDate = createCalendar();
    createCalendarSlider(calendarDate);
   
    newuser().then(res => {

      res.themes.forEach(element => {
        const categoryPart = document.createElement('button');
        categoryPart.textContent = `${element.themes_name.toUpperCase()}`;
        categoryPart.className = 'afisha__category-part';
        categoryContainer.append(categoryPart);
        categoryPart.setAttribute('theme_id', `${element.theme_id}`)
      });
      const objAfisha = {
        date_from: "23.11.2022",
        date_to: "31.12.2022",
        themes: "",
      }

      themesArr = [];
      res.themes.forEach(el => {
        themesArr.push(el.theme_id);
        
      })
      let str = themesArr.join(',');
      objAfisha.themes = str;

      createList(objAfisha, res.sidhash)

      filterBtn ();

      getFilterAfisha (objAfisha, res.sidhash)
    })


   }
 })