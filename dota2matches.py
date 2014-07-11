from  bs4 import BeautifulSoup
import urllib2


class Dota2:

	def __init__(self):

		# Website schedule for Dota 2 matches
		self.matchPageHTML = 'http://www.gosugamers.net/dota2/gosubet'

		req = urllib2.Request(self.matchPageHTML, headers={'User-Agent' : "Magic Browser"})
		response = urllib2.urlopen(req)

		self.matchPageSoup = BeautifulSoup(response)
		
	




	def findMatches(self):
		
		if(self.matchPageSoup):
			liveMatchesGroup = self.matchPageSoup.body.findAll("div",class_ = "box")

			print liveMatchesGroup


		else:

			print "Can not find the given website."





test = Dota2()
test.findMatches()


