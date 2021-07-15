using Newtonsoft.Json;

namespace ProAgil.WebAPI.Model
{
    public class Evento
    {
        [JsonProperty ("EventoId")]
        public int EventoId { get; set; }
        
        [JsonProperty ("Local")]
        public string Local { get; set; }
        
        public string DataEvento { get; set; }
        public string Tema { get; set; }
        public int QtdPessoas { get; set; }
        public string Lote { get; set; }
    }
}