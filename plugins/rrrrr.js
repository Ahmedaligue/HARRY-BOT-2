let handler = async (m, { command, text }) => m.reply(`**╔⟐━───━┓🕸️┏━───━⟐╗*
*❆🎭┊الــلــقـب*
*〘〙*
*❆⁉️┊بـنـت او ولـد*
*〘〙*
*❆🧭┊مـن طـرف* 
*〘〙*
*رقم الواتس 📱*
*〘〙*
*✦━━━━━[ *لوفي-بوت* ]━━━━━✦`.trim(), null, m.mentionedJid ? {
    mentions: m.mentionedJid
  } : {})
  handler.command = /(استماره-مصغره)$

export default handler