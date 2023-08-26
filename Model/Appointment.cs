using CLOLA.Model.Entities;
using CLOLA.Data;

namespace CLOLA.Model
{
    public class Appointment : _Base
    {
        #region Forekey
        public int? PetId { get; set; }

        public Pet? Pet { get; set; }

        public int? OwnerId { get; set; }

        public Owner? Owner { get; set; }

        public int? TypeServiceId { get; set; }

        public TypeService? TypeService { get; set; }

        #endregion

        public DateTime? DateStart { get; set; }

        public DateTime? DateFinish { get; set; }

        public bool? IsCheckout { get; set; }

        public bool? IsCheckin { get; set; }
    }
}