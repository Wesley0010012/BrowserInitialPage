import type React from "react";

type ClockProps = React.HTMLAttributes<HTMLElement> & {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function Clock({
  year,
  month,
  day,
  hours,
  minutes,
  seconds,
  ...props
}: ClockProps): React.ReactNode {
  const formatedYear = year.toString().padStart(4, "0");
  const formatedMonth = month.toString().padStart(2, "0");
  const formatedDay = day.toString().padStart(2, "0");

  const formatedHours = hours.toString().padStart(2, "0");
  const formatedMinutes = minutes.toString().padStart(2, "0");
  const formatedSeconds = seconds.toString().padStart(2, "0");

  return (
    <h3 {...props}>
      <p>
        {formatedYear}/{formatedMonth}/{formatedDay}
      </p>
      <p>
        {formatedHours}:{formatedMinutes}:{formatedSeconds}
      </p>
    </h3>
  );
}
