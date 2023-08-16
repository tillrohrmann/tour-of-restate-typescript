/*
 * Copyright (c) 2023 - Restate Software, Inc., Restate GmbH
 *
 * This file is part of the Tour of Restate Typescript handler API,
 * which is released under the MIT license.
 *
 * You can find a copy of the license in the file LICENSE
 * in the root directory of this repository or package or at
 * https://github.com/restatedev/tour-of-restate-typescript-handler
 */

import * as restate from "@restatedev/restate-sdk";

const doAddTicket = async (
  _ctx: restate.RpcContext,
  _userId: string,
  _ticketId: string,
) => {
  return true;
};

const doExpireTicket = async (
  _ctx: restate.RpcContext,
  _userId: string,
  _ticketId: string,
) => {};

const doCheckout = async (_ctx: restate.RpcContext, _userId: string) => {
  return true;
};

export const userSessionRouter = restate.keyedRouter({
  addTicket: doAddTicket,
  expireTicket: doExpireTicket,
  checkout: doCheckout,
});

export const userSessionApi: restate.ServiceApi<typeof userSessionRouter> = {
  path: "UserSession",
};
