import moment from "moment";
const now = moment();

export const findDate = (startDate, now) => {
  const startDateMoment = moment(startDate);

  if (startDateMoment.diff(now, "days") === 0) {
    return (
      <h4 className="title active">{`This course has starts today. You can still REGISTER.`}</h4>
    );
  }
  if (startDateMoment.diff(now) < 0) {
    return (
      <h4 className="title inactive">{`You are a bit too late. This course has already started.`}</h4>
    );
  }
  if (startDateMoment.diff(now) > 0) {
    return (
      <h4 className="title active">{`This course starts in ${startDateMoment.diff(
        now,
        "days"
      )} days.
    Go ahead and REGISTER NOW!`}</h4>
    );
  }
};

export const compareDates = (startDate, endDate) => {
  return `${moment(startDate).diff(moment(endDate), "days")} days`;
};
