import hyRequest from "../request";
// type=pend 未完成订单
// type=recent 最近订单
// type=all 全部订单
export function getOrderList(type = "all") {
  console.log("first");
  const a = hyRequest.get({
    url: `/order/list?type=${type}`,
  });
  return a;
}
