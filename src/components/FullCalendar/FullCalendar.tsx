import { useRef, useEffect, useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import Card from '../Card'
import { TradeType } from '../../types'
import { network, logger } from '../../utils'
import { useParams } from 'react-router-dom'

interface CalendarDataType {
  date: string,
  display: 'background',
  color: 'lime' | 'red' | 'none',
  closed_position: string
}


const FullCalendarLayout = () => {

  const calendarRef = useRef<FullCalendar>(null)
  const [trades , setTrades ] = useState<TradeType[] | null>(null)
  const { id } = useParams()


  const reducedData: CalendarDataType[] | undefined = trades?.reduce((acc: CalendarDataType[], curr: TradeType) => {
    const date = curr.modified.substring(0, 10);
    const existingItemIndex = acc.findIndex(item => item.date.substring(0, 10) === date);

    if (existingItemIndex !== -1) {
      const pl = parseFloat(acc[existingItemIndex].closed_position) + parseFloat(curr.closed_position)
      acc[existingItemIndex].closed_position = pl.toFixed(2).toString();
    } else {
      const newItem: CalendarDataType = {
        date,
        closed_position: curr.closed_position,
        display: "background",
        color: parseFloat(curr.closed_position) < 0 ? "red" : "lime",
      };
      acc.push(newItem);
    }

    return acc;
  }, []);

  useEffect(() => {
    try {
      network.GET_JSON(`/trade/${id}/get_trades_from_summary/`).then(response => {
        setTrades(response.data)
      })
    } catch (e) {
      logger.error('Error fetching trades', e)
    }

    if (calendarRef) {
      const calendarApi = calendarRef.current?.getApi()

      calendarApi?.setOption("dayCellContent", function (info) {
        const dataObj = reducedData?.find(function (d) {
          return d.date === info.date.toISOString().substring(0, 10)
        })

        if (dataObj) {
          return {
            html:
              '<span class="day-number">' + info.dayNumberText +
              '</span><div class="cell-data">' +
              dataObj.closed_position +
              '</div>'
          }
        } else {
          return {
            html: '<span class="day-number">' + info.dayNumberText + '</span>'
          }
        }
      })
      calendarApi?.setOption('timeZone', 'UTC')
    }
  }, [reducedData, id])



  return (
    <Card>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={reducedData}
      />
    </Card>
  );
}


export default FullCalendarLayout