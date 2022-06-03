using System;

namespace Burndown.Extensions
{
    public static class GuidExtensions
    {
        public static bool IsEmpty(this Guid guid)
        {
            bool result = (guid == Guid.Empty);
            return result;
        }

        public static bool IsNullOrEmpty(this Guid? guid)
        {
            bool result = (!guid.HasValue || guid.GetValueOrDefault(Guid.Empty) == Guid.Empty);
            return result;
        }
    }
}
