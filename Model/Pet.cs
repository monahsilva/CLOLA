using CLOLA.Model.Entities;

namespace CLOLA.Model
{
    public class Pet : _Base
    {
        public string? Name { get; set; }
        
        public string? Type { get; set; }

        public double? Age { get; set; }

        #region Forekey

        public int? OwnerId { get; set; }
        public Owner? Owner { get; set; }

        #endregion

    }
}
