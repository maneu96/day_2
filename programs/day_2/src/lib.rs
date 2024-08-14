use anchor_lang::prelude::*;

declare_id!("8aAQWnwBSsc9DNpYiVYSPWyJnNBoYpQSYXWtF2HXMiSS");

#[program]
pub mod day_2 {
    use super::*;
    
    pub fn initialize(ctx: Context<Initialize>,
        a: u64,
        b: u64,
        message: String) -> Result<()> {
msg!("You said {:?}", message);
msg!("You sent {} and {}", a, b);
Ok(())
}

// added this function
pub fn array(ctx: Context<Initialize>, arr: Vec<u64>) -> Result<()> {
    msg!("Your array {:?}", arr);
    Ok(())
} 

pub fn add(ctx: Context<Initialize>, a: i64, b: i64) -> Result<()>{
    msg!("{} + {} = {} ", a,b, a+b);
    Ok(())
}
pub fn sub(ctx: Context<Initialize>, a: i64, b: i64) -> Result<()>{
    msg!("{} - {} = {} ", a,b, a-b);
    Ok(())
}

pub fn div(ctx: Context<Initialize>, a: i64, b: i64) -> Result<()>{
    msg!("{} / {} = {} ", a,b, a/b);
    Ok(())
}

pub fn mult(ctx: Context<Initialize>, a: i64, b: i64) -> Result<()>{
    msg!("{} * {} = {} ", a,b, a*b);
    Ok(())
}
}


#[derive(Accounts)]
pub struct Initialize {}
    