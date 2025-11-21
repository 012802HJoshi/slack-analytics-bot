import { Router } from "express";
import { vpnConnect } from "../Controller/controller.vpn.js";

export const router = Router();

router.get("/connected",vpnConnect);