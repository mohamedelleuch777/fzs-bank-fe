import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  './FundApplication.css'
import styles from './styles.module.css'
import Button from './button';

export default function PreliminaryFundingAmountTab() {
    return (
        <div className='account-card'>
            <h3>Ön Finansman Tutarı</h3>
            <h2>USD 15,000</h2>
            <p>Bu, satışlarınıza dayalı tahmini bir finansman tutarıdır. Nihai teklif şartları, ihtiyaçlarınıza ve iş uygunluğunuz ile finansal verilerinizin daha ayrıntılı bir incelemesine bağlıdır. Başvurunuzu başlatmak için sonraki adımları izleyin.</p>
            <div className='account-form'>
                <form>
                    <div className='amount'>
                        <div>
                        <label>İstediğiniz fonlama tutarını girin *</label>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <div style={{width:"29%"}}>
                                <select className='form-control form-select' type="text" name="earning-type">
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>TL</option>
                                </select>
                            </div>
                            <div style={{width:"69%"}}>
                                <input className='form-control' type="text" name="amount" />
                            </div>
                        </div>
                        </div>
                        <Button className="fund-button" label="Devam" />
                        
                    </div>
                </form>
            </div>
            <div className='accardion'>
                <div class="faq-drawer">
                  <input class="faq-drawer__trigger" id="faq-drawer" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer">Finanse edilmesi ne kadar sürer? </label>
                  <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                      <p>
                      48 saat gibi kısa bir sürede, durumunuza bağlı olarak, başvurunuz gönderildikten sonra finansman tekliflerini gösteren bir ön protokol alacaksınız. Vadeli anlaşma üzerine 24 saat içinde para alın.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="faq-drawer">
                  <input class="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-2">Daha fazla fon alabilir miyim?</label>
                  <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                      <p>
                      Daha fazla fon alabilir miyim? Choco Up'ta, kendi başarımız kadar her kurucunun başarısını da kutlarız. Finansman teklifleri, veriye dayalı yaklaşımımızla analiz edilen finansal ve pazarlama performansınıza dayalıdır. Ne kadar çok gelir elde ederseniz ve ne kadar çok satış verisi bağlarsanız, size o kadar çok fon sağlanacaktır.

                      İşletmeniz büyüdükçe, ölçeklendirmek için daha fazla sermayeye ihtiyacınız olabileceğini anlıyoruz. İhtiyaçlarınıza en uygun şekilde güncellenmiş finansman teklifleriyle yeni bir finansman turu sunulacaktır.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="faq-drawer">
                  <input class="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-3">Herhangi bir ücret var mı?</label>
                  <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                      <p>
                      Sizin gibi kurucular için işleri basit ve şeffaf hale getirmeyi seviyoruz. Dönemsel veya bileşik faizimiz yoktur. Gelir paylaşımı modelimiz, sabit bir ücret anlamına gelir ve geri ödeme sırasında satışlarınızın sabit bir yüzdesi alınır. Teklifi kabul etmeden önce tam olarak ne kadar ödediğinizi bilirsiniz ve süreç boyunca ücretler artmaz.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        
    )}