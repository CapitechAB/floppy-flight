namespace FloppyFlight.Flight
{
    /// <summary>
    /// One flap edge. Quest reports bothHands when both controllers swing down together.
    /// Mobile always reports a single tap.
    /// </summary>
    public interface IFlapInput
    {
        bool Poll(out bool bothHands);
    }
}
