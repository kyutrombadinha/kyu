const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')

const imageToBase64 = require('image-to-base64');
const { color, bgcolor } = require('./lib/color')
const axios = require('axios')
const { help } = require('./src/help')
const { help1 } = require('./src/help1')

const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const kill = require('./src/kill')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
prefix = '.'
blocked = []

const { animPict, cewePict, cowoPict, loliPict, egirlstylePict, ghibliPict, kpopPict, animgif, nekoPict, perfilanime,waifuPict } = require('./lib/pict')
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Hora ${pad(minutes)} Minuto ${pad(seconds)} Segundo`
}
//const { 
  //  rugaapi
//} = require('./lib/rugaapi')
async function hug  () {
		try {
			//teks = body.slice(6)
			/*if (!isDaftar) return reply(mess.only.daftarB)*/
			//reply(mess.wait)
				reply('cons hug')
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {quoted: mek})
				} 
				catch (e) 
				{
					hug()
				}
	}
const {
	fb
} = require('./lib/fb')
const {
	ytdl
} = require('./lib/ytdl')



async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Olá @${num.split('@')[0]}\nBem vindo ao grupo *${mdata.subject}*Seja amigavel❤️`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Tchau @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	client.on('chat-update', async (mek) => {
		//const client = new WAConnection()------------------
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const command2 = body.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: ' Carregando... ',
				success: '✔️ Deu certo, ufa kk ✔️',
				error: {
					stick: '⚠️ Falha, ocorreu um erro ao converter a imagem em figurinha ⚠️',
					Iv: '❌ Link  invalido ❌'
				},
				only: {
					group: '❌ Este comando só pode ser usado em grupos! ❌',
					ownerG: '⚠️ Este comando só pode ser usado pelo dono do bot! 😂',
					ownerB: '❌ Este comando só pode ser usado pelo proprietário do bot! ❌',
					admin: '⚠️ Este comando só pode ser usado pelo o adm! 😝',
					Badmin: '❌ Este comando só pode ser usado quando eu virar adm porra! ❌'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["556796083824@s.whatsapp.net"] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : true
			const isautostick = isGroup ? autostick.includes(from) : true
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'image'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			
			
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			if (isGroup && isautostick && isMedia && isImage) {
				const mediaData = await decryptMedia(message, uaOverride)
				const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
				
					client.sendMessage(from, imageBase64, sticker, {quoted: mek})
				console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
			}
			switch(command) {
				case 'help':
				case 'menu':
					client.sendMessage(from, help(prefix), text)
					break
					case 'help1':
				case 'menu1':
					client.sendMessage(from, help1(prefix), text)
					break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nome do bot* : ${me.name}\n*Número do bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Contato de bloqueio total* : ${blocked.length}\n*O bot está ativo em* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'Esta é a lista de números bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Só uma foto')
					}
					break
					case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug&apikey=BotWeA', {method: 'get'})
                                        if (!isUser) return reply(mess.only.daftarB)
					//if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break

				case 'stikergif':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
                                                if (!isUser) return reply(mess.only.daftarB)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`âŒ Falhou, no momento da conversÃ£o ${tipe} para o sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						break
				case 'stiker':
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falha ao converter ${tipe} para figurinha`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie fotos com legendas ${prefix}sticker ou tags de imagem que já foram enviadas`)
					}
					break
				/*case 'gtts':
					if (args.length < 1) return client.sendMessage(from, 'Qual o código de idioma, cara?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto poh?', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('A maior parte do texto é merda tio')
					: gtts.save(ranm, dtt, function() {
						client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(rano)
					})
					break*/
				case 'meme':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'dono':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/NgpUuz6.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*CRIADOR:* Kyu\n*WPP:* wa.me/+556796083824\n*INSTA:* https://www.instagram.com/caffedemanha/ \n\n\n*Digite *.bot* para ver comandos basicos para criar um bot'})
					break
				/*case 'bot':
			     	memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/dPUVFF6.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ''})
					break*/
				case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`O prefixo foi alterado com sucesso para : ${prefix}`)
					break
				case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break

				case 'fml':
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
					//if (!isUser) return reply(mess.only.daftarB)
					hasil = data.result.fml
					await axios.get('https://arugaz.my.id/api/edu/translate?lang=pt&text='+hasil).then(res => {
					const resalt = `${res.data.text}`
					//----
					reply(resalt)
					/*
					const gtts = require('./lib/gtts')(`pt`)
					dtt = resalt
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})*/
				 })
					
					
					break
				/*case 'fml':
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
					//if (!isUser) return reply(mess.only.daftarB)
					hasil = data.result.fml
					reply(hasil)
					break*/
				/*case 'fml2':
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/randomfmylife?apikey=BotWeA`)
					//if (!isUser) return reply(mess.only.daftarB)
					hasil = data.result
					await axios.get('https://arugaz.my.id/api/edu/translate?lang=pt&text='+hasil).then(res => {
					const resalt = `${res.data.text}`
					//----
					const gtts = require('./lib/gtts')(`pt`)
					dtt = resalt
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					//----
					reply(resalt) })
					break*/
				case 'hentai':
					if(!isNsfw) return reply('*NSFW Desativado*')
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'animepict':
					animPict()
				   .then(buffer => {
					   client.sendMessage(from, 'Aguarde...', MessageType.text)
					   client.sendMessage(from, buffer, MessageType.image)
				   })
				   .catch(err => {
					   console.log(err)
				   })
					break
				case 'perfilanime':
					perfilanime()
				   .then(buffer => {
					   client.sendMessage(from, 'Aguarde...', MessageType.text)
					   client.sendMessage(from, buffer, MessageType.image)
				   })
				   .catch(err => {
					   console.log(err)
				   })
					break
				case 'nekopict':
					
					if(!isNsfw) return reply('*NSFW Desativado*')
					nekoPict()
				   .then(buffer => {
					   client.sendMessage(from, 'Aguarde...', MessageType.text)
					   client.sendMessage(from, buffer, MessageType.image)
				   })
				   .catch(err => {
					   console.log(err)
				   })
					break
				case 'fb':
				
					texto = body.slice(3)
				   fb(texto)
					   .then(data => {
						   const { resultHD, resultSD } = data
						   let hasil = `Escolha a resoluÃ§Ã£o queridaðŸ˜™ \n\n\n HD ${resultHD} \n\n\n SD ${resultSD}`
						   client.sendMessage(from, hasil, MessageType.text)
					   })
					   .catch(err => {
						   console.log(err)
					   })
				   break  
				case 'waifupict':
					waifuPict()
				   .then(buffer => {
					   client.sendMessage(from, 'Aguarde...', MessageType.text)
					   client.sendMessage(from, buffer, MessageType.image)
				   })
				   .catch(err => {
					   console.log(err)
				   })
					break
				case 'ghiblipict':
					ghibliPict()
				   .then(buffer => {
					   client.sendMessage(from, 'Aguarde...', MessageType.text)
					   client.sendMessage(from, buffer, MessageType.image)
				   })
				   .catch(err => {
					   console.log(err)
				   })
					break
				case 'kpoppict':
					kpopPict()
				   .then(buffer => {
					   client.sendMessage(from, 'Aguarde...', MessageType.text)
					   client.sendMessage(from, buffer, MessageType.image)
				   })
				   .catch(err => {
					   console.log(err)
				   })
					break
				case 'egirlpict':
					egirlstylePict()
				   .then(buffer => {
					   client.sendMessage(from, 'Aguarde...', MessageType.text)
					   client.sendMessage(from, buffer, MessageType.image)
				   })
				   .catch(err => {
					   console.log(err)
				   })
					break
				case 'lolipict':
					loliPict()
				   .then(buffer => {
					   client.sendMessage(from, 'Aguarde...', MessageType.text)
					   client.sendMessage(from, buffer, MessageType.image)
					   const buffer2 = fs.readFileSync("./media/fbi.mp4")
						client.sendMessage(from, buffer2, video, {quoted: mek, ptt:true})
				   })
				   .catch(err => {
					   console.log(err)
				   })
					break
				case 'play':   
					reply(mess.wait)
					play = body.slice(5)
					anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
					 infomp3 = `*Musica encontrada!!!*\nJudul : ${anu.result.title}\nFonte : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE ENVIANDO POR FAVOR, NÃƒO SPAM YA PAI*`
					buffer = await getBuffer(anu.result.thumbnail)
					lagu = await getBuffer(anu.result.url_audio)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
					client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'kpop':
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que ja¡ foram enviadas`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil')
					break
				case 'kiss':
				arqa = body.trim().split(' ')
				if (args.length == 1) {
					const persona = author.replace('@c.us', '')
					kill.sendTextWithMentions(from, 'Minha nossa! @' + persona + ' deu um beijo em ' + arqa[1] + ' !')
					if (double == 1) {
					await kill.sendGiphyAsSticker(from, 'https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif')
					} else {
					await kill.sendGiphyAsSticker(from, 'https://media.giphy.com/media/1wmtU5YhqqDKg/giphy.gif')
					}
				} else {
					await kill.reply(from, 'Marque ~apenas uma~ a pessoa quem vocÃª quer beijar hihihi', id)
				}
				case 'ass':
				
					if(!isNsfw) return reply('*NSFW Desativado*')
					reply(mess.wait)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://meme-api.herokuapp.com/gimme/LegalTeens', {method: 'get'})
                                        //if (!isUser) return reply(mess.only.daftarB)
					//if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						//if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				break
				case 'ass2':
					if(!isNsfw) return reply('*NSFW Desativado*')
					reply(mess.wait)
					anu = await fetchJson('https://meme-api.herokuapp.com/gimme/LegalTeens', {method: 'get'})
					buffer = await getBuffer(anu.url)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				
				case 'gifhentai'://FUNCIONOU
				
					if(!isNsfw) return reply('*NSFW Desativado*')
					reply(mess.wait)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/Random_hentai_gif', {method: 'get'})
                                        //if (!isUser) return reply(mess.only.daftarB)
					//if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						//if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				
				case 'bjanime'://FUNCIONOU
					
					if(!isNsfw) return reply('*NSFW Desativado*')
					reply(mess.wait)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?&apikey=BotWeA', {method: 'get'})
                                        //if (!isUser) return reply(mess.only.daftarB)
					//if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						//if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'tts':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return client.sendMessage(from, 'Qual Ã© o cÃ³digo da linguagem?', text, {quoted: mek})
					   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'CadÃª o texto', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('texto grande demais.')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				case 'imagens':
                                        //tels = body.slice(11)
					tels = body.slice(7)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${tels}`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*${tels}*`})
					break
				case 'loli':
					teks = body.slice(6)
					/*if (!isDaftar) return reply(mess.only.daftarB)*/
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'neko':
					teks = body.slice(6)
					/*if (!isDaftar) return reply(mess.only.daftarB)*/
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'nftrap':
				
					if(!isNsfw) return reply('*NSFW Desativado*')
					teks = body.slice(8)
					/*if (!isDaftar) return reply(mess.only.daftarB)*/
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				
				case 'nfneko':
				
					if(!isNsfw) return reply('*NSFW Desativado*')
					teks = body.slice(8)
					/*if (!isDaftar) return reply(mess.only.daftarB)*/
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					buffer = api.getImageURL("https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA")
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'nfblow':
				
					if(!isNsfw) return reply('*NSFW Desativado*')
					teks = body.slice(8)
					/*if (!isDaftar) return reply(mess.only.daftarB)*/
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('digite 1 para ativar')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('o recurso está ativo')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ _*SUCESSO*_ ❭ ativado o recurso nsfw neste grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUCESSO ❭ desativado o recurso nsfw neste grupo')
					} else {
						reply('digite 1 para ativar, 0 para desativar o recurso')
					}
					break	
				
				case 'atst':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('digite 1 para ativar')
					if (Number(args[0]) === 1) {
						if (isautostick) return reply('o recurso está ativo')
						autostick.push(from)
						fs.writeFileSync('./database/json/autostick.json', JSON.stringify(nsfw))
						reply('❬ _*SUCESSO*_ ❭ ativado o recurso autosticker neste grupo')
					} else if (Number(args[0]) === 0) {
						autostick.splice(from, 1)
						fs.writeFileSync('./database/json/autostick.json', JSON.stringify(nsfw))
						reply('❬ SUCESSO ❭ desativado o recurso autosticker neste grupo')
					} else {
						reply('digite 1 para ativar, 0 para desativar o recurso')
					}
					break	
				case 'facebook':
                if (args.length == 0) return reply(from, `Kirim perintah *${prefix}fb [linkfb]*`)
                reply(from, '_Scrapping Metadata...._')
                rugaapi.fb(args)
                .then(async(res) => {
                    await client.sendFileFromUrl(from, `${res.result.VideoUrl}`, '', '', id)
                    .catch(() => {
                        client.reply(from, `Error...`, id)
                    })
                })
                break
				case 'dare':
				fetch('https://raw.githubusercontent.com/kyutrombadinha/aleatorio/main/texto.txt')
				.then(res => res.text())
				.then(body => {
					let darex = body.split('\n')
					let darez = darex[Math.floor(Math.random() * darex.length)]
					reply(from, darez)
				})
				.catch(() => {
					reply(from, 'Hayolohhh, ada yang error!!')
				})
				break
				
					//----------------------------------------------------------
				case 'nhentai':
            case 'nh':
                //if (args.length !== 1) return await bocchi.reply(from, ind.wrongFormat(), id)
                //if (isNaN(Number(args[0]))) return await bocchi.reply(from, ind.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await reply(from, ind.notNsfw())
                    await reply(from, ind.wait(), id)
                    console.log(`Searching nHentai for ${args[0]}...`)
                    const validate = await nhentai.exists(args[0])
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(args[0])
                                .then((book) => {
                                     return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(args[0])
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await client.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                            console.log('Success sending nHentai info!')
                        } catch (err) {
                            console.error(err)
                            await reply(from, 'Error!')
                        }
                    } else {
                        await reply(from, ind.nhFalse())
                    }
                } else {
                    await reply(from, ind.wait())
                    console.log(`Searching nHentai for ${args[0]}...`)
                    const validate = await nhentai.exists(args[0])
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(args[0])
                                .then((book) => {
                                     return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(args[0])
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await client.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                            console.log('Success sending nHentai info!')
                        } catch (err) {
                            console.error(err)
                            await reply(from, 'Error!')
                        }
                    } else {
                        await reply(from, ind.nhFalse())
                    }
                }
            break
					//----------------------------------------------------------
				case 'del':
					client.deleteMessage(from, { id: mek.message.extendedTextMessage, remoteJid: from, fromAll: true })
					break
				case 'nhentai2':
					const buffer3 = fs.readFileSync("./media/nhentai.mp4")
					client.sendMessage(from, buffer3, video, {quoted: mek, ptt:true})
					break
				case 'baka':
					const buffer4 = fs.readFileSync("./media/bakaa.mp3")
					client.sendMessage(from, buffer4, audio, {quoted: mek, ptt:true})
					break
				
				case 'lolivoice':
					var numero = getRandomIntInclusive(0,35).toString()
					var nome = './mp3/loli (' + numero +').mp3'
					const buffer6 = fs.readFileSync(nome)
					client.sendMessage(from, buffer6, audio, {quoted: mek, ptt:true})
					break
				case 'animeedit':
					var items = ["./media/jiraya death.mp4", "./media/majin boo.mp4", "./media/melancholy.mp4", "./media/minato.mp4", "./media/Nishimiya.mp4", "./media/Nishimiya2.mp4", "./media/obito.mp4", "./media/pantsu.mp4", "./media/zero two edit.mp4" ]
					var nime = items[Math.floor(Math.random() * items.length)];
					const buffer5 = fs.readFileSync(nime)
					client.sendMessage(from, buffer5, video, {quoted: mek, ptt:true})
					break
				case 'hug':
					reply(mess.wait)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
                                        //if (!isUser) return reply(mess.only.daftarB)
					//if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						//if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'cry':
					reply(mess.wait)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
                                        //if (!isUser) return reply(mess.only.daftarB)
					//if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						//if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'blowjb':
				
					if(!isNsfw) return reply('*NSFW Desativado*')
					reply(mess.wait)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
                                        //if (!isUser) return reply(mess.only.daftarB)
					//if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						//if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				
				case 'egirlgif':
					reply(mess.wait)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					
					var items = ["egirl gif","egirl cute gif"]
					var cowo = items[Math.floor(Math.random() * items.length)];
					var url = 'https://api.fdci.se/rep.php?gambar=' + cowo
					anu = await fetchJson(url, {method: 'get'})
					axios.get(url)
					.then(res => {
						var acak = res.data[Math.floor(Math.random() * res.data.length )]
						exec(`wget ${acak} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						//if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
							})
					})
					break
					case 'qrcode':
					buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
					case 'cade':
					tels = body.slice(5)
					reply(mess.wait)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					
					var items = [tels]
					var cowo = items[Math.floor(Math.random() * items.length)];
					var url = 'https://api.fdci.se/rep.php?gambar=' + cowo
					anu = await fetchJson(url, {method: 'get'})
					axios.get(url)
					.then(res => {
						var acak = res.data[Math.floor(Math.random() * res.data.length )]
						exec(`wget ${acak} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						//if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
							})
					})
					
					break
					//----------------------------------------------------
					case 'nekopict':
					nekoPict()
				   .then(buffer => {
					   client.sendMessage(from, 'Aguarde...', MessageType.text)
					   client.sendMessage(from, buffer, MessageType.image)
				   })
				   .catch(err => {
					   console.log(err)
				   })
					break
					//----------------------------------------------------------
				case 'trap':
						try {
							if (!isNsfw) return reply('*NSFW Desativado*')
							res = await fetchJson(`https://api.computerfreaker.cf/v1/trap`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: '7w7'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('âŒ *ERROR* âŒ')
						}
					break
				case 'ytmp3':
				
					tels = body.slice(6)
				   ytdl('mp3', tels)
					   .then(data => {
						   const { judul, size, hasil: link } = data
						   let hasil = `Aqui esta o link de download da musica\nClique no link abaixo:\nMUSICA: ${judul}\n\nTamanho Do audio: ${size}\n\nLink: ${link}`
						   client.sendMessage(id, '[aguarde...', MessageType.text)
						   client.sendMessage(id, hasil, MessageType.text)
					   })
					   .catch(err => {
						   console.log(err)
					   })
				   break
				case 'ytmp4':
				
					tels = body.slice(6)
			   ytdl('mp4', tels)
				   .then(data => {
					   const { judul, size, hasil: link } = data
					   let hasil = `Aqui esta o link de download do seu video\nclique no link abaixo:\nMUSICA: ${judul}\n\nTamanho Do video: ${size}\n\nLink: ${link}`
					   client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
					   client.sendMessage(id, hasil, MessageType.text)
				   })
				   .catch(err => {
					   console.log(err)
				   })
			   break
				case 'marcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'marcar2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                 case 'marcar3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'limpar':
					if (!isOwner) return reply('Comando so funfa, se você for o dono do bot 😡')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Excluido todos os chats com sucesso :)')
					break
				case 'ts':
					if (!isOwner) return reply('Quem é você lek?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ ISSO E UMA TRANSMISSÃO ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão enviada com sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ ISSO E UMA TRANSMISSÃO ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão enviada com sucesso')
					}
					break
        case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Promovido com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Esse(a) carinha aqui @${mentioned[0].split('@')[0]} agora é admin então respeitem ok?! 😂`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Rebaixado com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Esse(a) carinha aqui @${mentioned[0].split('@')[0]} Acabou de perder o adm pressionem F ai rapaziada 😂!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('quem você deseja adicionar, um gênio??')
					if (args[0].startsWith('08')) return reply('Use o código do país amigo')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar a pessoa, talvez seja porque é privado')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Qual humano você quer kickar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recebidos, emitidos :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`KKKKKKKKKK acabou de levar ban, bobao : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'linkgroup':
							if (!isGroup) return reply(mess.only.group)
							if (!isGroupAdmins) return reply(mess.only.admin)
							if (!isBotGroupAdmins) return reply(mess.only.Badmin)
							linkgc = await client.groupInviteCode(from)
							reply('https://chat.whatsapp.com/'+linkgc)
							break
					case 'leave':
							if (!isGroup) return reply(mess.only.group)
							if (isGroupAdmins || isOwner) {
								client.groupLeave(from)
							} else {
								reply(mess.only.admin)
							}
							break
				case 'toimg':
					if (!isQuotedSticker) return reply('❌ responder sticker hum ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter adesivos em imagens ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Já ativo um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Ativou com sucesso o recurso de boas-vindas neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desativou com sucesso o recurso de boas-vindas neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
                                      break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('A tag alvo que você deseja clonar')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('falhou')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Só uma foto')
					}
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					}
					else {
						switch(budy) {
						case 'oi':
						case 'ola':
						reply('oi')
						break
						}
							console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
						}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
