import * as datefns from 'date-fns'

export const formatDate = (dateStr: string): string => {
   const date = datefns.parse(dateStr, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date())
   return datefns.format(date, 'dd/MM/yyyy HH:mm:ss')
}
