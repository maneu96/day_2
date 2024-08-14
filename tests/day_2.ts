import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Day2 } from "../target/types/day_2";
import { BN } from "bn.js";

describe("day_2", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Day2 as Program<Day2>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize(new anchor.BN(777), new anchor.BN(888), "hello").rpc();
    console.log("Your transaction signature", tx);
  });
  
  // added this test
 it("Array test", async () => {
    let a  =  [new anchor.BN(777), new anchor.BN(888)];

    const tx = await program.methods.array(a).rpc();
    console.log("Your transaction signature", tx);
  });

  it("Peforms int additions", async() => {
    const tx = await program.methods.add(new anchor.BN(1), new anchor.BN(2)).rpc();
    console.log("Your transaction signature", tx);
  });

  it("Performs int subtractions", async() => {
    const tx = await program.methods.sub(new anchor.BN(1), new anchor.BN(2)).rpc();
    console.log("Your transaction signature", tx);
  })

  it("Performs int divisions", async() => {
    const tx = await program.methods.div(new anchor.BN(4), new anchor.BN(2)).rpc();
    console.log("Your transaction signature", tx);
  })


  it("Performs int multiplications", async() => {
    const tx = await program.methods.mult(new anchor.BN(4), new anchor.BN(3)).rpc();
    console.log("Your transaction signature", tx);
  })

});
