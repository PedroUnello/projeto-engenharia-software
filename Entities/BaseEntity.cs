using Newtonsoft.Json;
using System;

namespace Burndown.Entities
{
    public class BaseEntity
    {
        [JsonIgnore]
        public int Id { get; set; }
        [JsonIgnore]
        public Guid Hash { get; set; }
        public bool Deleted { get; set; } = false;
        [JsonIgnore]
        public DateTime CreationDate { get; set; }
    }
}
