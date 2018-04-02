
$(document).ready(function () {

    var globalEvents = [
            {
                title: '.NET',
                start: '2016-08-18'
            },
            {
                title: 'Software Eng 2',
                start: '2016-08-30',

            },
              {
                  title: 'Software Eng 2',
                  start: '2016-10-18',

              },
                {
                    title: 'Software Eng 2',
                    start: '2016-10-25',

                },
                  {
                      title: 'Software Eng 2',
                      start: '2016-11-08',

                  },
           
            {
                title: '.NET',
                start: '2016-08-25'
            },
            {
                title: '.NET',
                start: '2016-09-15'
            },
            {
                title: '.NET',
                start: '2016-10-27'
            },
             {
                 title: 'Database',
                 start: '2016-08-24'
             },
              {
                  title: 'Database',
                  start: '2016-09-21'
              },
               {
                   title: 'Database',
                   start: '2016-11-16'
               },
                {
                    title: 'Database',
                    start: '2016-11-23'
                },
                {
                    title: 'Website Dev',
                    start: '2016-08-24'
                },
                 {
                     title: 'Website Dev',
                     start: '2016-09-09'
                 },
                  {
                      title: 'Website Dev',
                      start: '2016-10-28'
                  },

            {
                title: 'Exam ',
                start: '2016-11-21',
                end: '2016-11-30'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2016-06-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2016-06-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2016-06-13T07:00:00'
            },
            {
                title: 'Click for Google',

                start: '2016-06-28'
            }
    ];

    $('#big-calendar').fullCalendar({
        aspectRatio: 1.5,
        theme: true,
        header: {
            left: 'prev,next today',
            center: 'title',
            right: ''
        },
        buttonText: { today: 'This Month' },

        defaultDate: '2016-06-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: globalEvents
    });

    var startMonth = 7 - 1;


    //July
    $("#small-calendar-1").datepicker({
        minDate: new Date(2016, startMonth, 1),
        maxDate: new Date(2016, startMonth, 31),
        //beforeShowDay: function (d) {
        //    var a = new Date(2016, startMonth, 17);
        //    var b = new Date(2016, startMonth, 23);
        //    return [true, a <= d && d <= b ? "highlight-day" : ""];
        //}
    });
    startMonth++;


    //August
    $("#small-calendar-2").datepicker({
        minDate: new Date(2016, startMonth, 1),
        maxDate: new Date(2016, startMonth, 31),
        beforeShowDay: function (d) {
            var thisDate = d.getTime();
            if (

                thisDate == new Date(2016, startMonth, 24).getTime()) {
                return [true, "highlight-day-4"];
            } else if (thisDate == new Date(2016, startMonth, 18).getTime() || thisDate == new Date(2016, startMonth, 25).getTime()) {
                return [true, "highlight-day-1"];
            }
          
            else if (thisDate == new Date(2016, startMonth, 30).getTime()) {
                return [true, "highlight-day-3"];
            }
            else {
                return [true, ""];
            }

        }
    });

    startMonth++;

    // September
    $("#small-calendar-3").datepicker({
        minDate: new Date(2016, startMonth, 1),
        maxDate: new Date(2016, startMonth, 30),
        beforeShowDay: function (d) {

            var thisDate = d.getTime();
            if (

                thisDate == new Date(2016, startMonth, 21).getTime()) {
                return [true, "highlight-day"];
            } else if (thisDate == new Date(2016, startMonth, 9).getTime()) {
                return [true, "highlight-day-2"];
            }

            else if (thisDate == new Date(2016, startMonth, 15).getTime()) {
                return [true, "highlight-day-1"];
            }
            else {
                return [true, ""];
            }
          
          
        }
    });
    startMonth++;

    // October
    $("#small-calendar-4").datepicker({
        minDate: new Date(2016, startMonth, 1),
        maxDate: new Date(2016, startMonth, 31),
        beforeShowDay: function (d) {
            var thisDate = d.getTime();
            if (

                thisDate == new Date(2016, startMonth, 18).getTime() || thisDate == new Date(2016, startMonth, 25).getTime()) {
                return [true, "highlight-day-3"];
            } else if (thisDate == new Date(2016, startMonth, 28).getTime()) {
                return [true, "highlight-day-2"];
            }

            else if (thisDate == new Date(2016, startMonth, 27).getTime()) {
                return [true, "highlight-day-1"];
            }
            else {
                return [true, ""];
            }
        }
    });
    startMonth++;
    // November
    $("#small-calendar-5").datepicker({
        minDate: new Date(2016, startMonth, 1),
        maxDate: new Date(2016, startMonth, 30),
        beforeShowDay: function (d) {
            var thisDate = d.getTime();
            if (

                thisDate == new Date(2016, startMonth, 16).getTime() || thisDate == new Date(2016, startMonth, 23).getTime()) {
                return [true, "highlight-day"];
            } else if (thisDate == new Date(2016, startMonth, 08).getTime()) {
                return [true, "highlight-day-3"];
            }

            else {
                return [true, ""];
            }
          
        }
    });
    startMonth++;

    //December
    $("#small-calendar-6").datepicker({
        minDate: new Date(2016, startMonth, 1),
        maxDate: new Date(2016, startMonth, 31),
        //beforeShowDay: function (d) {
        //    var a = new Date(2016, startMonth, 17);
        //    var b = new Date(2016, startMonth, 23);
        //    return [true, a <= d && d <= b ? "highlight-day" : ""];
        //}
    });
});

$('#big-calendar').fullCalendar('today');