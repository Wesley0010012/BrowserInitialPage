export type TimeInformation = {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function convertSecondsToTimeInformation(
  totalSeconds: number
): TimeInformation {
  const date = new Date(totalSeconds * 1000);

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}

type GreetingRule = {
  until: number;
  text: string;
};

const GREETINGS: GreetingRule[] = [
  { until: 5, text: "Good Night" },
  { until: 12, text: "Good Morning" },
  { until: 18, text: "Good Afternoon" },
  { until: 22, text: "Good Evening" },
  { until: 24, text: "Good Night" },
];

export function getGreeting(hour: number): string {
  return GREETINGS.find((rule) => hour < rule.until)?.text ?? "Good Night";
}
