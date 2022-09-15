// Convertir fecha en timestamp a formato legible
      export function formatDate(fecha){
         fecha = new Date(fecha)
         let dia = fecha.getDate()+1;
         let mes = fecha.getMonth()+1;
         let ano = fecha.getFullYear();
         return (`${dia}-${mes}-${ano}`)
       }

      //  export default {
      //    formatDate,
      //  }

// Formato para fecha para Filtrar
    export function formatDateFiltrar(fecha){
      fecha = new Date(+fecha)
        let dia = fecha.getDate();
        let mes = fecha.getMonth()+1;
        let ano = fecha.getFullYear();
        return (`${ano}-${mes}-${dia}`)
      }